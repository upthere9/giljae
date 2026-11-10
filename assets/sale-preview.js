const salePreview = document.querySelector('.sale-preview');
const saleDialog = document.querySelector('#sale-dialog');

if (salePreview && saleDialog && typeof saleDialog.showModal === 'function') {
  salePreview.addEventListener('click', (event) => {
    event.preventDefault();
    saleDialog.showModal();
    document.documentElement.classList.add('sale-dialog-open');
  });

  saleDialog.querySelector('.sale-dialog-close').addEventListener('click', () => {
    saleDialog.close();
  });

  saleDialog.addEventListener('click', (event) => {
    if (event.target !== saleDialog) return;
    const bounds = saleDialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) {
      saleDialog.close();
    }
  });

  saleDialog.addEventListener('close', () => {
    document.documentElement.classList.remove('sale-dialog-open');
    salePreview.focus({ preventScroll: true });
  });
}
