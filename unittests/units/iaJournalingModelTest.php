<?php

require_once(__DIR__.'/../lib/iaPHPUnit_Auth_Framework_TestCase.php');

/**
 * Unittesing-specific iaAuth class.
 * Defines a custom $permission.
 * @package unittests
 */
class iaJournalingModelTestAuth extends iaAuth {
    protected $permissions = array(
        'allowed-1' => array(
            'models' => array(
                'pays' => 'R'
            )
        ),
        'allowed-2' => array(
            'models' => array(
                '*' => 'R'
            )
        ),
        'disallowed-1' => array(
            'models' => array(
                'genre' => 'R',
                'canton' => 'C',
                'permis' => 'CUD',
                '*' => 'CRUD'
            )
        )
    );
}
$authClass = 'iaJournalingModelTestAuth';

/**
 * Tests iaJournalingModel
 * @package unittests
 */
class iaJournalingModelTest extends iaPHPUnit_Auth_Framework_TestCase {

    /**
     * Tests iaJournalingModel allowance regarding requested 'model_name'.
     * Note that 'version' model is used for testing.
     */
    function test_auth_model_access() {
        // Must execute without exception
        $this->set_shibboleth('some', 'any', 'allowed-1');
        xModel::load('version', array('model_name' => 'pays'))->get();
        // Must execute without exception
        $this->set_shibboleth('some', 'any', 'allowed-2');
        xModel::load('version', array('model_name' => 'version'))->get();
        // Must execute without and with exceptions
        $this->set_shibboleth('some', 'any', 'disallowed-1');
        xModel::load('version', array('model_name' => 'genre'))->get();
        xModel::load('version', array('model_name' => 'personne'))->get();
        try {
            xModel::load('version', array('model_name' => 'canton'))->get();
            xModel::load('version', array('model_name' => 'permis'))->get();
        } catch (Exception $e) {
            $this->assertTrue($e instanceof xException);
            $this->assertEquals($e->status, 403);
            $this->assertRegExp("/^You are not allowed to 'get' on 'version' with model '/", $e->getMessage());
        }
    }

    /**
     * Tests that iaJournalingModel-related controllers correctly
     * only allow 'get' operations.
     * @todo: FIXME: Cannot be run in testing server:
     *        iaWebController::__construct() calls iaAuth::set_from_aai()
     *        which throws 'You must be authenticated to continue'.
     *        Test disabled for now.
     */
    function _test_controllers_get_only() {
        $controllers = array(
            'versions', 'versions_data', 'versions_relations'
        );
        foreach ($controllers as $name) {
            // Ensures 'get' is allowed
            $controller = xController::load($name, array('xlimit'=>1))->get();
            // Ensures 'put, post, delete' is forbidden
            $operations = array('put', 'post', 'delete');
            foreach ($operations as $operation) {
                try {
                    xController::load($name)->$operation();
                } catch (Exception $e) {
                    $this->assertTrue($e instanceof xException);
                    $this->assertEquals($e->status, 403);
                    $this->assertEquals('Method not allowed', $e->getMessage());
                }
            }
        }
    }
}
