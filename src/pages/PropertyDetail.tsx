import { useWallet } from "@solana/wallet-adapter-react";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { properties, propertyType } from "../constant/propertiesList";
import { doc, getDoc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { Connection } from "@metaplex/js";
import {
  clusterApiUrl,
  Transaction,
  SystemProgram,
  LAMPORTS_PER_SOL,
  PublicKey,
} from "@solana/web3.js";
import { useGlobalContext } from "../context/globalContext";

const PropertyDetail = () => {
  const { publicKey, sendTransaction } = useWallet();
  const params = useParams();
  const { setIsLoaderOpen, setIsToastOpen } = useGlobalContext();

  //State to manage the number input
  const [value, setValue] = useState("");
  //The details of the selected property
  const [details, setDetails] = useState<propertyType>();
  //The total amount invested in the particular property
  const [totalAmount, setTotalAmount] = useState(0);
  //The total number of investors that invested in the particular property
  const [totalInvestors, setTotalInvestors] = useState(0);

  //To get the details, total amount and total investors of a selected project
  useEffect(() => {
    setDetails(properties.find((item) => item.id.toString() === params.id));

    if (params.id) {
      let total = 0;

      onSnapshot(doc(db, "properties", params.id), (doc) => {
        let res = doc.data();
        setTotalInvestors(Object.keys(res?.investments).length);

        const walletAddresses = Object.keys(res?.investments);
        walletAddresses.forEach((walletAddress) => {
          total += parseInt(res?.investments[walletAddress].amount);
        });

        setTotalAmount(total);
      });
    } else {
      return;
    }
  });

  //Logic to Invest in a property
  const handleClick = async () => {
    if (publicKey && params.id && details) {
      if (value == "") {
        alert("Enter a value in SOL");
        return;
      }
      if (parseFloat(value) <= 0) {
        alert("Don't be thick, Enter a value greater than 0");
        return;
      }
      if (totalAmount >= details.price) {
        alert("Funding already completed");
        return;
      }
      if (totalAmount + parseFloat(value) > details.price) {
        alert("Funding amount will be exceeded, Enter a lower value");
        return;
      }

      setIsLoaderOpen(true);

      //func to send sol
      await sendSOL(parseFloat(value));

      const docRef = doc(db, "properties", params.id);
      let walletAddress = publicKey.toBase58();

      // Get the current amount value
      const docSnapshot = await getDoc(docRef);
      const currentAmount =
        docSnapshot.data()?.investments?.[walletAddress]?.amount || 0;

      // Save the investment details in firebase
      await updateDoc(docRef, {
        [`investments.${walletAddress}.amount`]:
          parseFloat(currentAmount) + parseFloat(value),
      });
      await addNew(parseFloat(value));

      setValue("");
      setIsLoaderOpen(false);
      setIsToastOpen(true);
    } else {
      alert("Connect Wallet");
    }
  };

  const connection = new Connection(clusterApiUrl("devnet"));
  //Wallet that recieves sent SOL
  let theWallet = "3W2vrGsj7HVrdr3hLRGZhqyqzUjSQnqz8yXPtWCBgpWs";

  const sendSOL = useCallback(
    async (amount: number) => {
      if (!publicKey) throw new WalletNotConnectedError();

      let lamportsI = LAMPORTS_PER_SOL * amount;
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey(theWallet),
          lamports: lamportsI,
        })
      );

      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, "processed");
    },
    [publicKey, sendTransaction, connection]
  );

  //Save the investor details in firebase
  const addNew = async (amount: number) => {
    if (publicKey) {
      let walletAddress = publicKey.toBase58();

      const docRef = doc(db, "investors", walletAddress);
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.data()) {
        const currentAmount = docSnapshot.data()?.[`${params.id}`] || 0;
        await updateDoc(docRef, {
          [`${params.id}`]: parseFloat(currentAmount) + amount,
        });
      } else {
        await setDoc(doc(db, "investors", walletAddress), {
          [`${params.id}`]: amount,
        });
      }
    }
  };

  //Calculate percent of the invested amount
  let percent = (totalAmount / (details?.price || 0)) * 100;

  return (
    <div className="px-[20px] md:px-[80px] pt-[40px]">
      <h1 className="text-[2rem] font-Sec font-bold">{details?.name}</h1>

      <div className="my-[30px] rounded-[16px] lg:h-[400px] flex flex-col lg:flex-row gap-[20px]">
        <div className="border border-[tomato] overflow-hidden w-full lg:w-[60%] rounded-[16px]">
          <img
            className="h-full w-full object-cover"
            src={details?.img}
            alt="Property"
          />
        </div>
        <div className="lg:flex-1 h-[300px] lg:h-full border border-[tomato] overflow-hidden rounded-[16px]">
          <img
            className="object-contain h-full w-full"
            src={details?.plan}
            alt="Property Plan"
          />
        </div>
      </div>

      <div className="lg:h-[300px] flex flex-col lg:flex-row gap-[40px] lg:gap-[20px]">
        <div className="flex-1 rounded-[10px]">
          <p className="text-[1.1rem] font-bold">Description</p>
          <p>{details?.desc}</p>
          <h1 className="mt-[15px] text-[1rem] font-semibold text-[red]">
            Deadline: 22<sup>nd</sup> August, 2024
          </h1>
          <div className="mt-[20px] lg:mt-[50px] w-fit flex flex-col vsm:flex-row gap-[10px] vsm:gap-[20px] justify-between border-y border-[#95d5ed] py-[10px]">
            <p className="text-[1.3rem]">{details?.bedrooms} bedrooms</p>
            <div className="hidden vsm:block h-[40px] w-0 border-l-[0.1px] border-black" />
            <p className="text-[1.3rem]">{details?.bathrooms} bathrooms</p>
            <div className="hidden vsm:block h-[40px] w-0 border-l-[0.1px] border-black" />
            <p className="text-[1.3rem]">
              {details?.area} m<sup>2</sup>
            </p>
          </div>
        </div>
        <div className="border-[2px] border-pink-200 w-full sm:w-[50%] lg:w-[30%] rounded-[10px] p-[10px]">
          <p className="font-Sec text-[1.5rem] font-bold">
            {details?.price} SOL
          </p>

          <div className="mt-[20px] relative w-full h-[10px] rounded-[10px] overflow-hidden bg-gray-400">
            <div
              style={{ width: percent + "%" }}
              className="absolute top-0 left-0 h-full bg-[tomato]"
            />
          </div>

          <div className="mt-[10px] flex justify-between items-center">
            <p>
              {totalInvestors} Investor{totalInvestors > 1 && "s"}
            </p>
            <p>{percent.toFixed(2)}% funded</p>
          </div>

          <input
            className="mt-[20px] mb-[10px] w-full border border-[tomato] py-[10px] rounded-[20px] px-[10px]"
            placeholder="Enter a value in SOL e.g 5"
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            onClick={handleClick}
            className={`${
              publicKey
                ? "bg-[red] cursor-pointer"
                : "bg-[tomato] cursor-not-allowed"
            } rounded-[20px] w-full py-[10px] text-white font-bold`}
          >
            INVEST NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
