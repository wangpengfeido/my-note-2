x = linspace(-10, 10);
g = x.^(1/2);
k = x.^(1/3);

plot(x, g, x, k);
legend({'$f(x)=x^{\frac{1}{2}}$', '$f(x)=x^{\frac{1}{3}}$'}, 'Interpreter', 'latex');
grid on;
