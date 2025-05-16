"use client";

import { UserDetailContext } from "@/context/userDetailContext";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useState } from "react";

function Provider({children}) {

  const {user} = useUser()
  const [userDetail, setUserDetail] = useState();
  useEffect(() => {
    user&&createNewUser()
  },[user])
  const createNewUser = async () => {
    const response = await axios.post("/api/user",{
      name:user?.fullName,
      email:user?.primaryEmailAddress?.emailAddress
    });
    console.log(response.data);
    setUserDetail(response.data)
    
  };

  return (
      <UserDetailContext.Provider value={{userDetail, setUserDetail}}>
      {children}
      </UserDetailContext.Provider>
  )
}

export default Provider
