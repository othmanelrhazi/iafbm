<?php
/**
 * This model stores tables write activity.
 */
/**
 * @package iafbm
 * @subpackage model
 */
class VersionModel extends iaJournalingModelMysql {

    var $versioning = false;

    var $table = 'versions';

    var $mapping = array(
        'id' => 'id',
        'created' => 'created',
        'creator' => 'creator',
        'table_name' => 'table_name',
        'id_field_name' => 'id_field_name',
        'id_field_value' => 'id_field_value',
        'model_name' => 'model_name',
        'operation' => 'operation',
        'commentaire' => 'commentaire'
    );

    var $primary = array('id');

    var $validation = array();

    /**
     * Returns the current revision (eg. the last stored revision).
     * If $n is given, returns the last-$n revision.
     * @param int If given, return the last-$n revision.
     * @return int
     */
    function current($n=0) {
        // Raw SQL query to bypass mandatory 'model_name' parameter
        $r = xModel::q("SELECT `id` FROM `versions` ORDER BY id DESC LIMIT 1 OFFSET {$n};");
        $v = @array_shift(mysql_fetch_assoc($r));
        if (!$v) throw new xException('Could not retrieve current version', 500);
        return $v;
    }

    // Self-documentation
    var $description = 'versions des enregistrement (historique)';
    var $labels = array(
        'id' => 'identifiant interne',
        'actif' => 'enregistrement actif',
        'created' => 'date de création',
        'creator' => 'identifiant Switch-AAI du créateur',
        'table_name' => 'nom de la table',
        'id_field_name' => 'nom du champs identifiant',
        'id_field_value' => 'valeur du champs identifiant',
        'model_name' => 'nom du modèle',
        'operation' => 'operation effectuée',
        'commentaire' => 'commentaire'
    );
}