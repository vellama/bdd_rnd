"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jest_cucumber_1 = require("jest-cucumber");
var Either_1 = require("fp-ts/lib/Either");
var email_verification_lib_1 = require("../src/domains/email/lib/email_verification.lib");
var feature = jest_cucumber_1.loadFeature('./features/simple.feature', {
    scenarioNameTemplate: function (vars) {
        return vars.scenarioTitle + " (" + vars.scenarioTags.join(',') + ")";
    }
});
jest_cucumber_1.defineFeature(feature, function (test) {
    test('Entering a bad formatted email', function (_a) {
        var when = _a.when, then = _a.then;
        var userEmail;
        var emailVerificationResult;
        when('A customer enters a bad formatted email', function () {
            userEmail = 'veryBad.formatted.email';
        });
        then('The result is false', function () {
            var res = email_verification_lib_1.isEmailFormatValid(userEmail);
            if (Either_1.isLeft(res)) {
                throw res.left;
            }
            emailVerificationResult = res.right;
            expect(emailVerificationResult).toBeFalsy();
        });
    });
    test('Entering a right formatted email', function (_a) {
        var when = _a.when, then = _a.then;
        var userEmail;
        var emailVerificationResult;
        when('A customer enters a right formatted email', function () {
            userEmail = 'contact@gmail.com';
        });
        then('The result is true', function () {
            var res = email_verification_lib_1.isEmailFormatValid(userEmail);
            if (Either_1.isLeft(res)) {
                throw new Error('email format validation fails');
            }
            emailVerificationResult = res.right;
            expect(emailVerificationResult).toBeTruthy();
        });
    });
});
//# sourceMappingURL=simple.steps.js.map