import Header from "@/src/components/Layout/Header";
import HomeScreen from "@/src/screens/HomeScreen";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Header />
      <HomeScreen />
    </>
  );
};

export default page;
