<?php

/**
 * @package iafbm
 * @subpackage model
 */
class PersonneAdresseModel extends iaModelMysql {

    var $table = 'personnes_adresses';

    var $mapping = array(
        'id' => 'id',
        'actif' => 'actif',
        'personne_id' => 'personne_id',
        'adresse_id' => 'adresse_id',
        'defaut' => 'defaut'
    );

    var $primary = array('id');

    var $validation = array(
        'adresse_id' => 'mandatory',
        'personne_id' => 'mandatory'
    );

    var $joins = array(
        'personne' => 'LEFT JOIN personnes ON (personnes_adresses.personne_id = personnes.id)',
        'adresse' => 'LEFT JOIN adresses ON (personnes_adresses.adresse_id = adresses.id)',
        'adresse_type' => 'LEFT JOIN adresses_types ON (adresses.adresse_type_id = adresses_types.id)',
        // 2nd foreign join (depends on 'adresse' join)
        'adresse_pays' => 'LEFT JOIN pays ON (adresses.pays_id = pays.id)'
    );

    var $join = array('adresse');

    var $archive_foreign_models = array(
        'adresse' => array('adresse_id' => 'id')
    );

    // Self-documentation
    var $description = 'adresses des personnes';
    var $labels = array(
        'id' => 'identifiant interne',
        'actif' => 'enregistrement actif',
        'personne_id' => 'identifiant de la personne',
        'adresse_id' => 'identifiant de l\'adresse',
        'defaut' => 'adresse par défaut'
    );
}
