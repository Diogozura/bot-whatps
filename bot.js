import puppeteer from 'puppeteer';

async function iniciarBot() {
  const browser = await puppeteer.launch({
    headless: false, // Coloque true se não precisar ver o navegador
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
  });

  const page = await browser.newPage();

  try {
    await page.goto('https://web.whatsapp.com', {
      waitUntil: 'networkidle2',
      timeout: 0, // espera indefinidamente se precisar carregar o QR code
    });

    console.log('✅ WhatsApp Web carregado. Escaneie o QR Code no navegador.');

    // Fica rodando para manter o navegador aberto
    await new Promise(() => {});
  } catch (err) {
    console.error('❌ Erro ao abrir WhatsApp Web:', err);
    await browser.close();
  }
}

iniciarBot();
