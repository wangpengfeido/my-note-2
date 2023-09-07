x1 = linspace(0, 5);
g = log(x1) / log(exp(1));
k = log(x1) / log(2);

plot(x1, g, 'r', x1, k, 'g');
legend('$f(x)=\log_{e}x$', '$f(x)=\log_{2}x$', 'Interpreter', 'latex');
grid on;
