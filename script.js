// Copy coupon code, set year
const codeEl = document.getElementById('code');
const btn = document.getElementById('copy');
const out = document.getElementById('copied');
const yearEl = document.getElementById('year');
yearEl.textContent = new Date().getFullYear();

if(btn){
  btn.addEventListener('click', async () => {
    try{
      await navigator.clipboard.writeText(codeEl.textContent.trim());
      out.textContent = 'Cupom copiado: ' + codeEl.textContent.trim();
      out.style.color = '#23d5ab';
    }catch(e){
      out.textContent = 'Não foi possível copiar. Segure e selecione o cupom.';
      out.style.color = '#ff9aa2';
    }
  });
}

// TODO: substitua os links '#' pelos seus links da SHEIN e redes sociais.
