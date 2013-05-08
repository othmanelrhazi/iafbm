DROP TABLE IF EXISTS commissions_candidats_commentaires;
CREATE TABLE commissions_candidats_commentaires (
    id INT NOT NULL AUTO_INCREMENT,
    actif BOOLEAN NOT NULL DEFAULT true,
    termine BOOLEAN NOT NULL DEFAULT false,
    commission_id INT NOT NULL,
    date_cloture DATE DEFAULT NULL,
    commentaire TEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (commission_id) REFERENCES commissions(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE UNIQUE INDEX commission_id_unique ON commissions_candidats_commentaires(commission_id);