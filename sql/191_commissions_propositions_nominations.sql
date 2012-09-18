DROP TABLE IF EXISTS commissions_propositions_nominations;
CREATE TABLE commissions_propositions_nominations (
    id INT NOT NULL AUTO_INCREMENT,
    actif BOOLEAN NOT NULL DEFAULT true,
    commission_id INT NOT NULL,
    candidat_id INT,
    objet TEXT,
    activite_id INT,
    contrat_debut DATE NULL DEFAULT NULL,
    contrat_debut_au_plus_tot BOOLEAN,
    contrat_fin DATE,
    contrat_taux TINYINT UNSIGNED,
    charge_horaire INT UNSIGNED,
    charge_horaire_unite TEXT,
    indemnite INT UNSIGNED,
    titre_cours TEXT,
    formation_id INT,
    observations TEXT,
    annexe_rapport_commission BOOLEAN DEFAULT NULL,
    annexe_cahier_des_charges BOOLEAN DEFAULT NULL,
    annexe_cv_publications BOOLEAN DEFAULT NULL,
    annexe_declaration_sante BOOLEAN DEFAULT NULL,
    imputation_fonds TEXT,
    imputation_centre_financier TEXT,
    imputation_unite_structurelle TEXT,
    imputation_numero_projet TEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (commission_id) REFERENCES commissions(id),
    FOREIGN KEY (candidat_id) REFERENCES candidats(id),
    FOREIGN KEY (activite_id) REFERENCES activites(id),
    FOREIGN KEY (formation_id) REFERENCES formations(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
CREATE UNIQUE INDEX commission_id_unique ON commissions_propositions_nominations(commission_id);