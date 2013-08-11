describe("Add Break Dialog Controller", function() {
    var $scope;
    var dialog;
    var dialog_service_close;
    var break_dialog_controller;
    var testDialogOptions;

    beforeEach(module('dj-dash.controllers'));
    beforeEach(module('ui.bootstrap.dialog'));

    beforeEach(inject(function($rootScope) {
        $scope = $rootScope.$new();
    }));

    beforeEach(inject(function($controller, $dialog) {
        dialog = $dialog.dialog();
        dialog_service_close = spyOn(dialog, 'close');
        break_dialog_controller = $controller('AddBreakDialogCtrl', {$scope: $scope, dialog: dialog});

        testDialogOptions = {
            id: true,
            event: false,
            grant: true,
            weather: false,
            gsb: true,
            psa: false,
            notes: "Test Notes"
        };
    }));

    describe("ConfirmBreakDialog Function", function() {
        it("should return with selection options", function() {
            $scope.confirmBreakDialog(testDialogOptions);

            expect(dialog_service_close).toHaveBeenCalledWith(testDialogOptions);
        });
    });

    describe("CancelBreakDialog Function", function() {
        it("should return without selection options", function() {
            $scope.cancelBreakDialog();

            expect(dialog_service_close).toHaveBeenCalledWith();
        });
    });
});

