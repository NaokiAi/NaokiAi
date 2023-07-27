function submitQuestion() {
  const question = document.getElementById("inputQuestion").value;
  if (question.trim() === "") return;

  // Ganti 'YOUR_OPENAI_API_KEY' dengan API Key yang Anda peroleh setelah mendaftar dan mendapatkan akses ke API ChatGPT
  const apiKey = "YOUR_OPENAI_API_KEY";
  const apiUrl = "https://api.openai.com/v1/engines/davinci/completions";

  // Kirim permintaan POST ke API ChatGPT menggunakan fetch
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      prompt: question,
      max_tokens: 150
    })
  })
  .then(response => response.json())
  .then(data => {
    // Tampilkan jawaban dari API di frontend
    const outputAnswer = document.getElementById("outputAnswer");
    outputAnswer.innerHTML = data.choices[0].text.trim();
  })
  .catch(error => console.error("Error:", error));
}
