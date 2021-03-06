<?php

class EvaluationEvaluateurModel extends iaModelMysql {

    var $table = 'evaluations_evaluateurs';

    var $mapping = array(
        'id' => 'id',
        'actif' => 'actif',
        'evaluation_id' => 'evaluation_id',
        'personne_id' => 'personne_id'
    );

    var $primary = array('id');

    var $joins = array(
        'evaluation' => 'LEFT JOIN evaluations ON (evaluations_evaluateurs.evaluation_id = evaluations.id)',
        'personne' => 'LEFT JOIN personnes ON (evaluations_evaluateurs.personne_id = personnes.id)'
    );

    var $join = array('evaluation', 'personne');

    var $validation = array(
        'evaluation_id' => array('mandatory'),
        'personne_id' => array('mandatory')
    );
    
    var $archive_foreign_models = array(
        'evaluation' => 'evaluation_id',
        'personne' => 'personne_id'
    );
}
