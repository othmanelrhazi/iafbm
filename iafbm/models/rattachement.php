<?php

class RattachementModel extends iaModelMysql {

    var $table = 'rattachements';

    var $mapping = array(
        'id' => 'id',
        'id_unil' => 'id_unil',
        'id_chuv' => 'id_chuv',
        'actif' => 'actif',
        'section_id' => 'section_id',
        'nom' => 'nom',
        'abreviation' => 'abreviation'
    );

    var $primary = array('id');

    var $joins = array(
        'section' => 'LEFT JOIN sections ON (rattachements.section_id = sections.id)',
    );

    var $join = array('section');

    var $validation = array(
        'nom' => 'mandatory'
    );

    var $archive_foreign_models = array(
        'section' => array('section_id' => 'id')
    );

    // Self-documentation
    var $description = 'Catalogue des rattachements organisationnels';
    var $labels = array(
        'id' => 'identifiant interne',
        'id_unil' => 'identifiant UNIL',
        'id_chuv' => 'identifiant CHUV',
        'actif' => 'enregistrement actif',
        'section_id' => 'identifiant de section organisationnelle',
        'nom' => 'nom du rattachement',
        'abreviation' => 'abréviation du rattachement'
    );
}
