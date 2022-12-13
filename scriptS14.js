let app = angular.module("myApp", [])
        app.controller("control", function($scope){
            $scope.tarifa = 0
            $scope.horas = 0

            $scope.sueldobasico = function(){
                return $scope.tarifa * $scope.horas
            }

            $scope.descuento = function(){
                let basico = $scope.sueldobasico()
                let descuent = 0
                if(basico <= 501){
                    descuent = 0
                }else if(basico >= 500 && basico <= 1001){
                     descuent = 0.02
                }else if(basico >= 1000 && basico <= 4001){
                    descuent = 0.08
                }else if(basico >= 4000 && basico <= 8001){
                     descuent = 0.15
                }else if(basico >= 8000 && basico <= 1001){
                     descuent = 0.21
                }else{
                    descuent = 0.30
                }
                return basico * descuent
            }
            $scope.salarioneto = function(){
                let basico = $scope.sueldobasico()
                let descuent = $scope.descuento()
                return basico - descuent
            }
        })