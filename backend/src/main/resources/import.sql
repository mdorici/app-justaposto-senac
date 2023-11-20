INSERT INTO tb_user (first_name, last_name, email, password) VALUES ('Alex', 'Orange', 'alex@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (first_name, last_name, email, password) VALUES ('Maria', 'Green', 'maria@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_USER');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

INSERT INTO tb_category (name, created_At) VALUES ('Reparação e manutenção', NOW());
INSERT INTO tb_category (name, created_At) VALUES ('Higiene e estética', NOW());

INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('Vitrificação', 1264.0, TIMESTAMP WITH TIME ZONE '2023-11-13T20:50:07.12345Z', 'A vitrificação é um procedimento que tem como objetivo recuperar o brilho original da pintura do veículo e, nesse sentido, remove possíveis desgastes e manchas do tempo. Na vitrificação, é adicionada uma camada de vidro líquido e um produto hidrofóbico (isto é, resistente à água), deixando a carroceria ainda mais protegida e com mais resistência. Dependendo do serviço, a vitrificação pode durar mais de um ano.', 'https://github.com/mdorici/pi-iv-senac-app-justaposto/blob/main/documents/vitrificacao-automotiva.jpeg?raw=true');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('Cristalização de vidros', 1690.0, TIMESTAMP WITH TIME ZONE '2023-11-14T10:00:00Z', 'A cristalização de vidros é responsável por garantir mais segurança ao motorista, uma vez que a cristalização proporciona a impermeabilização do para-brisa do veículo. Com o serviço, os vidros ficam protegidos contra inúmeros fatores externos, como respingos, poeira, salinidade marinha e outras sujeiras que podem aderir à superfície. O resultado cria uma espécie de camada protetora e transparente.', 'https://github.com/mdorici/pi-iv-senac-app-justaposto/blob/main/documents/cristalizacao.jpg?raw=true');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('Polimento do farol', 850.0, TIMESTAMP WITH TIME ZONE '2023-11-14T10:00:00Z', 'O serviço de polimento do farol tem como objetivo polir os faróis dos veículos, deixando-os mais potentes e eliminando aquele aspecto fosco e desbotado. O polimento do farol é considerado relativamente simples, mas essencial para os motoristas que se preocupam com a segurança e a aparência do veículo.', 'https://github.com/mdorici/pi-iv-senac-app-justaposto/blob/main/documents/polimento-farol.jpg?raw=true');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('Higienização interna', 700.0, TIMESTAMP WITH TIME ZONE '2023-11-14T10:00:00Z', 'A higienização interna é mais uma opção de estética automotiva e, nesse caso, são inúmeros os serviços que podem ser realizados: lavagem de tapetes, aspiração completa, remoção de manchas etc. O serviço vai muito além da estética automotiva, sendo uma solução que remove até mesmo bactérias e fungos do automóvel, sendo um benefício para a saúde.', 'https://github.com/mdorici/pi-iv-senac-app-justaposto/blob/main/documents/higienizacao.jpg?raw=true');

INSERT INTO tb_product_category (product_id, category_id) VALUES (1, 1);
INSERT INTO tb_product_category (product_id, category_id) VALUES (2, 1);
INSERT INTO tb_product_category (product_id, category_id) VALUES (3, 2);
INSERT INTO tb_product_category (product_id, category_id) VALUES (4, 2);