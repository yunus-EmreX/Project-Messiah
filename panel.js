// Hesap girişi işlevi
const accountInput = document.getElementById("account-input");
const activateButton = document.getElementById("activate-button");
const statusMessage = document.getElementById("status-message");

activateButton.addEventListener("click", () => {
  const accountName = accountInput.value;
  if (accountName) {
    statusMessage.textContent = `${accountName} hesabı başarıyla aktif edildi.`;
    saveActivatedAccount(accountName); // Aktive edilen hesabı kaydet
    verifyAndSendData(accountName); // Hesap doğrulama ve veri gönderme işlemi
  } else {
    statusMessage.textContent = "Lütfen bir hesap adı girin.";
  }
});

// Veri depolama işlevi
function saveActivatedAccount(accountName) {
  const activatedAccounts = JSON.parse(localStorage.getItem("activatedAccounts")) || [];
  if (!activatedAccounts.includes(accountName)) {
    activatedAccounts.push(accountName);
    localStorage.setItem("activatedAccounts", JSON.stringify(activatedAccounts));
  }
}

// Hesap doğrulama ve veri gönderme işlevi
function verifyAndSendData(accountName) {
  const webhookURL = "https://discord.com/api/webhooks/1139682365216653403/1SvHh4VWanfIE7A8eAVvTsa9Qo-4UVhjEhAsBC6JuxsG5YJhlcSljwxm2mAOqGm6f8ur";
  
  // Hesap doğrulama işlemi
  if (accountName === "doğrulanmışhesap") {
    const data = {
      username: "Oyun Yardımcısı",
      content: `Hesap ${accountName} doğrulandı!`
    };
    
    // Veriyi Discord webhook'una gönderme
    fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      console.log("Veri başarıyla gönderildi:", response);
    })
    .catch(error => {
      console.error("Veri gönderme hatası:", error);
    });
  }
}

// Program seçenekleri ...
// (Önceki kodları buraya ekleyebilirsiniz.)
