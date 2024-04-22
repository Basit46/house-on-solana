import React, { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../firebase";
import { properties, propertyType } from "../constant/propertiesList";

const Profile = () => {
  const { publicKey } = useWallet();
  const [investedProperties, setInvestedProperties] = useState<any>();

  useEffect(() => {
    if (publicKey) {
      const address = publicKey?.toBase58();
      onSnapshot(doc(db, "investors", address), (doc) => {
        let res = doc.data();
        setInvestedProperties(res);
      });
    }
  }, []);

  return (
    <div className="px-[80px] mt-[40px] min-h-[70vh]">
      <h1 className="font-Sec text-[2rem] font-bold">
        Your Investment portfolio 🌱🚀
      </h1>
      <p className="mt-[10px] font-medium">{publicKey?.toBase58()}</p>
      <div className="mt-[50px] flex flex-col gap-[15px]">
        {investedProperties &&
          Object.keys(investedProperties).map((item) => (
            <Item item={item} amount={investedProperties[item]} key={item} />
          ))}
      </div>
    </div>
  );
};

export default Profile;

const Item = ({ item, amount }: { item: any; amount: any }) => {
  const [details, setDetails] = useState<propertyType>();

  useEffect(() => {
    setDetails(properties.find((prop) => prop.id.toString() === item));
  }, []);

  return (
    <div className="w-full flex gap-[30px] items-center border-black border-b-[2px] pb-[10px]">
      <div className="flex gap-[10px] items-center">
        <img className="w-[100px]" src={details?.img} alt="property" />
        <h1 className="font-bold text-[1.3rem]">{details?.name}</h1>
      </div>
      <p className="font-medium">You Invested {amount.toFixed(2)} SOL</p>
    </div>
  );
};
