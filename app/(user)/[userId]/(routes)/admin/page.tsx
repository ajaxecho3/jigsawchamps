"use client";
import { useUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const AdminPage = (props: Props) => {
  const { isSignedIn, user } = useUser();
  const router = useRouter();
  const adminString = process.env.ADMIN_LIST;
  const admin_list = adminString
    ?.replaceAll(" ", "")
    .split(",")
    .filter((admin) => admin !== "");

  return <div>AdminPage</div>;
};

export default AdminPage;
