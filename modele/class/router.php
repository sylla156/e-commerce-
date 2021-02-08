<?php

namespace aps;

use AltoRouter;

class router
{
    private $url_name;
    private $callback_url;
    private $route;

    public function __construct(...$url_name)
    {
        $this->url_name = $url_name;
    }

    public function execute()
    {
        $this->init_router();
        $this->element_router();
        $this->exec_element_router();
    }

    
    private function init_router()
    {
        $this->route = new AltoRouter();
    }


    private function element_router()
    {
        foreach ($this->url_name as $key => $value) {
            $this->route->map('GET|POST', $value, function () {
                $redirection = $_SERVER["PATH_INFO"] ?? "/../controller/acceuill";
                require_once   __DIR__ . "/../../controller" . $redirection . "/index.php";
            });
        }
    }



    private function exec_element_router()
    {


        foreach ($this->url_name as $key => $value) {

            if ($key >= 0) {
                $this->callback_url = $this->route->match();
            }

            if (isset($this->callback_url['target'])) {
                $this->callback_url['target']();
                break;
            } else {
                require_once  "../controller/error/index.php";
                break;
            }
        }
    }
}
