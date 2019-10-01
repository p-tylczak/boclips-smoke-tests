# Smoke tests

A Bunch of ui-based, and http-based tests to verify Boclips core functionalities are working.

## UI
Tests written with Cypress to assert on any UI flow.

## API
Tests written against the Boclips API, using jest. Reliable and fast. 

## Priorities
Depending on the test prefix `p1` or `p2`, tests will trigger an automatic alert. 

Any test failing in a file called, e.g. `p1.teachers.spec.ts` will wake people up at night should they fail.

Be mindful to classify your tests appropriately.