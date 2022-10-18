x = linspace(-2, 2);
g = x.^2;
k = x.^3;

plot(x, g, x, k);
legend('f(x)=x^{2}', 'f(x)=x^{3}')
grid on;
