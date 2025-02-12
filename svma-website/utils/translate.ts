export async function translateText(text: string, targetLang: string = "es"): Promise<string> {
  try {
    const response = await fetch("http://localhost:5001/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        q: text,
        source: "auto",
        target: targetLang,
        format: "text"
      })
    });

    if (!response.ok) throw new Error("Translation failed");

    const data = await response.json();
    return data.translatedText;
  } catch (error) {
    console.error("Error translating text:", error);
    return text;
  }
}
