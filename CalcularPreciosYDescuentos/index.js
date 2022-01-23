const calcularPrecioConDescuento = (precio, descuento) => {
  const porsentagePrecioConDescuento = 100 - descuento;
  const PrecioConDescuento = (precio * porsentagePrecioConDescuento) / 100;
  return PrecioConDescuento;
};

const onClickButtonPriceDiscount = () => {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue
  );

  const resolve = document.getElementById("resolvePrice");
  resolve.innerText = `El resultado del precio con descuento es $: ${precioConDescuento}`;
};
