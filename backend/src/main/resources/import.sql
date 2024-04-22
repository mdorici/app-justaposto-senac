INSERT INTO tb_category(name) VALUES ('Reparação e manutenção');
INSERT INTO tb_category(name) VALUES ('Higiene e estética');
INSERT INTO tb_category(name) VALUES ('Segurança e proteção automotiva');

INSERT INTO tb_product (name, price, description, img_url) VALUES ('Vitrificação', 1264.0, 'A vitrificação é um procedimento que tem como objetivo recuperar o brilho original da pintura do veículo e, nesse sentido, remove possíveis desgastes e manchas do tempo. Na vitrificação, é adicionada uma camada de vidro líquido e um produto hidrofóbico (isto é, resistente à água), deixando a carroceria ainda mais protegida e com mais resistência. Dependendo do serviço, a vitrificação pode durar mais de um ano.', 'https://github.com/mdorici/pi-iv-senac-app-justaposto/blob/main/documents/img/vitrificacao-automotiva.jpeg?raw=true');
INSERT INTO tb_product (name, price, description, img_url) VALUES ('Cristalização de vidros', 1690.0, 'A cristalização de vidros é responsável por garantir mais segurança ao motorista, uma vez que a cristalização proporciona a impermeabilização do para-brisa do veículo. Com o serviço, os vidros ficam protegidos contra inúmeros fatores externos, como respingos, poeira, salinidade marinha e outras sujeiras que podem aderir à superfície. O resultado cria uma espécie de camada protetora e transparente.', 'https://github.com/mdorici/pi-iv-senac-app-justaposto/blob/main/documents/img/cristalizacao.jpg?raw=true');
INSERT INTO tb_product (name, price, description, img_url) VALUES ('Polimento do farol', 850.0, 'O serviço de polimento do farol tem como objetivo polir os faróis dos veículos, deixando-os mais potentes e eliminando aquele aspecto fosco e desbotado. O polimento do farol é considerado relativamente simples, mas essencial para os motoristas que se preocupam com a segurança e a aparência do veículo.', 'https://github.com/mdorici/pi-iv-senac-app-justaposto/blob/main/documents/img/polimento-farol.jpg?raw=true');
INSERT INTO tb_product (name, price, description, img_url) VALUES ('Higienização interna', 700.0, 'A higienização interna é mais uma opção de estética automotiva e, nesse caso, são inúmeros os serviços que podem ser realizados: lavagem de tapetes, aspiração completa, remoção de manchas etc. O serviço vai muito além da estética automotiva, sendo uma solução que remove até mesmo bactérias e fungos do automóvel, sendo um benefício para a saúde.', 'https://github.com/mdorici/pi-iv-senac-app-justaposto/blob/main/documents/img/higienizacao.jpg?raw=true');
INSERT INTO tb_product (name, price, description, img_url) VALUES ('Lavagem detalhada', 200.0, ' Limpeza completa do veículo inclusive os cantos, carpetes, bancos, motor, rodas, etc.', 'https://github.com/mdorici/app-justaposto-senac/blob/main/documents/img/lavagem.jpg');
INSERT INTO tb_product (name, price, description, img_url) VALUES ('Película Solar Antivandalismo', 1450.0, 'Protege contra tentativas de quebra de vidros, tornando-os mais resistentes', 'https://github.com/mdorici/app-justaposto-senac/blob/main/documents/img/pelicula-solar.jpg');
INSERT INTO tb_product (name, price, description, img_url) VALUES ('Nano Proteção', 968.0.0, 'Oferece camada extra de proteção à pintura do carro, resistente a riscos e intempéries', 'https://github.com/mdorici/app-justaposto-senac/blob/main/documents/img/nano-protecao.jpg');
INSERT INTO tb_product (name, price, description, img_url) VALUES ('PPF (Proteção de Pintura)', 1100.0, ' Película transparente aplicada sobre a pintura do carro, protegendo contra riscos e pedras', 'https://github.com/mdorici/app-justaposto-senac/blob/main/documents/img/ppf-automotivo.jpg');
INSERT INTO tb_product (name, price, description, img_url) VALUES ('Polimento', 150.0, 'Remove riscos, manchas e marcas de desgaste da pintura do carro', 'https://github.com/mdorici/app-justaposto-senac/blob/main/documents/img/polimento.jpg');

INSERT INTO tb_product_category (product_id, category_id) VALUES (1, 1);
INSERT INTO tb_product_category (product_id, category_id) VALUES (2, 3);
INSERT INTO tb_product_category (product_id, category_id) VALUES (3, 1);
INSERT INTO tb_product_category (product_id, category_id) VALUES (4, 2);
INSERT INTO tb_product_category (product_id, category_id) VALUES (5, 2);
INSERT INTO tb_product_category (product_id, category_id) VALUES (6, 3);
INSERT INTO tb_product_category (product_id, category_id) VALUES (7, 3);
INSERT INTO tb_product_category (product_id, category_id) VALUES (8, 3);
INSERT INTO tb_product_category (product_id, category_id) VALUES (9, 1);

INSERT INTO tb_user (name, email, phone, password, birth_date) VALUES ('Maria Brown', 'maria@gmail.com', '988888888', '$2a$10$Rkb6GBnXjkUD2guN9/NwKe5EBY1fLOkwJt0t/fozrRhaq00U3rl92', '2001-07-25');
INSERT INTO tb_user (name, email, phone, password, birth_date) VALUES ('Alex Green', 'alex@gmail.com', '977777777', '$2a$10$Rkb6GBnXjkUD2guN9/NwKe5EBY1fLOkwJt0t/fozrRhaq00U3rl92', '1987-12-13');

INSERT INTO tb_role(authority) VALUES ('ROLE_CLIENT');
INSERT INTO tb_role(authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

INSERT INTO tb_order (moment, status, client_id) VALUES (TIMESTAMP WITH TIME ZONE '2022-07-25T13:00:00Z', 1, 1);
INSERT INTO tb_order (moment, status, client_id) VALUES (TIMESTAMP WITH TIME ZONE '2022-07-29T15:50:00Z', 3, 2);
INSERT INTO tb_order (moment, status, client_id) VALUES (TIMESTAMP WITH TIME ZONE '2022-08-03T14:20:00Z', 0, 1);

INSERT INTO tb_order_item (order_id, product_id, quantity, price) VALUES (1, 1, 2, 2528.0);
INSERT INTO tb_order_item (order_id, product_id, quantity, price) VALUES (1, 3, 1, 850.0);
INSERT INTO tb_order_item (order_id, product_id, quantity, price) VALUES (2, 3, 1, 850.0);
INSERT INTO tb_order_item (order_id, product_id, quantity, price) VALUES (3, 1, 1, 1264.0);

INSERT INTO tb_payment (order_id, moment) VALUES (1, TIMESTAMP WITH TIME ZONE '2022-07-25T15:00:00Z');
INSERT INTO tb_payment (order_id, moment) VALUES (2, TIMESTAMP WITH TIME ZONE '2022-07-30T11:00:00Z');

