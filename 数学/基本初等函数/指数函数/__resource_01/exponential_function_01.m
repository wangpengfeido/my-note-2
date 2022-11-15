x = linspace(-2, 2);
g = exp(1).^x;
k = (1 / exp(1)).^x;

plot(x, g, x, k);
legend('$f(x)=e^{x}$', '$f(x)=\frac{1}{e}^{3}$', 'Interpreter', 'latex')
grid on;
