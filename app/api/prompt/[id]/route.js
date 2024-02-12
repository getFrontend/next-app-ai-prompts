import { connectToDatabase } from "@/utils/database";
import Prompt from "@/models/prompt";

// GET (read prompt)
export const GET = async (request, { params }) => {
  try {
    connectToDatabase();

    const prompt = await Prompt
      .findById(params.id)
      .populate("creator");

    if (!prompt) return new Response("Prompt not found!", { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts!", { status: 500 });
  }
}

// PATCH {update prompt}
export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();

  try {
    await connectToDatabase();

    const existingPrompt = await Prompt.findById(params.id);

    if (!existingPrompt) return new Response("Prompt not found!", { status: 404 });

    // Update the prompt with new data
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();

    return new Response(JSON.stringify(existingPrompt, { status: 200 }));
  } catch (error) {
    return new Response("Error while updating Prompt!", { status: 500 });
  }
}

// DELETE (delete prompt)
export const DELETE = async (request, { params }) => {
  try {
    await connectToDatabase();

    // Find the prompt by ID and remove it from Database
    await Prompt.findByIdAndRemove(params.id);

    return new Response("Prompt deleted successfully ✔", { status: 200 });
  } catch (error) {
    return new Response("Error while deleting prompt!", { status: 500 });
  }
}