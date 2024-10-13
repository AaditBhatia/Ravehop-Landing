import { NextResponse } from 'next/server'
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.PUBLIC_AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.PUBLIC_AWS_SECRET_ACCESS_KEY!,
  },
});

const docClient = DynamoDBDocumentClient.from(client);

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    console.log("Received email:", email)
    console.log("AWS Region:", process.env.AWS_REGION)
    console.log("DynamoDB Table Name:", process.env.DYNAMODB_TABLE_NAME)

    const command = new PutCommand({
      TableName: process.env.DYNAMODB_TABLE_NAME,
      Item: {
        email: email,
        signupDate: new Date().toISOString(),
      },
    });

    await docClient.send(command);

    console.log("Email saved successfully to DynamoDB")
    return NextResponse.json({ message: 'Email saved successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error saving email to DynamoDB:', error)
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    } else {
      return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 })
    }
  }
}
