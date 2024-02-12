import Prompt from "@/models/prompt";
import { connectToDatabase } from "@/utils/database";

export const POST = async (req, res) => {
  const { userId, prompt, tag } = await req.json();

  try {
    await connectToDatabase();
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag
    });

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), {
      satus: 201
    })
  } catch (error) {
    return new Response("Failed to create a new prompt!", { status: 500 });
  }
}