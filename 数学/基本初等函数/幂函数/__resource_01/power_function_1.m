x1 = linspace(-2, 2);
g = x1.^2;
k = x1.^3;

x2 = linspace(0, 2);
l = x2.^(1/2);
m = x2.^(1/3);

plot(x1, g, 'r', x1, k, 'g', x2, l, 'b', x2, m, 'c');
legend('$f(x)=x^{2}$', '$f(x)=x^{3}$', '$f(x)=x^{\frac{1}{2}}$', '$f(x)=x^{\frac{1}{3}}$', 'Interpreter', 'latex')
grid on;
