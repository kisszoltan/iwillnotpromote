import {
  ContactsApi,
  ContactsApiApiKeys,
  CreateContact,
} from "@getbrevo/brevo";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email }: { email: string } = await req.json();

  const API_KEY = process.env.NEXT_PRIVATE_BREVO_API_KEY!;
  const LIST_ID = parseInt(process.env.NEXT_PRIVATE_BREVO_LIST_ID!);

  let apiInstance = new ContactsApi();

  apiInstance.setApiKey(ContactsApiApiKeys.apiKey, API_KEY);

  let createContact = new CreateContact();

  createContact.email = email;
  createContact.listIds = [LIST_ID];
  try {
    await apiInstance.createContact(createContact);

    return NextResponse.json(
      { message: "Successfully subscribed" },
      { status: 200 },
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: "Subscription failed", details: error.body.message },
      { status: 400 },
    );
  }
}
