DROP TABLE IF EXISTS commissions_etats;
CREATE TABLE commissions_etats (
    id INT NOT NULL AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    PRIMARY KEY (id)
) TYPE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `commissions_etats` (nom, description) VALUES ('En cours', 'Commission en cours');
INSERT INTO `commissions_etats` (nom, description) VALUES ('Clôturé', 'Commission clôturée');
INSERT INTO `commissions_etats` (nom, description) VALUES ('En suspens', 'Commission en suspens');