function tribonacci(signature, n) {
  if (n === 1) {
    return [1];
  } else if (n === 0) {
    return [];
  } else {
    while (signature.length <= n - 1) {
      signature.push(
        signature[signature.length - 1] +
          signature[signature.length - 2] +
          signature[signature.length - 3]
      );
    }
  }
  return signature;
}
