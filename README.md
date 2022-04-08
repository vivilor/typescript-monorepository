# Noticed bugs

## Typescript-marked context actions doesn't work / do nothing

Repro:
1. Go to file `packages/vite-spa/src/App.vue`
2. Remove all imports
3. Try to auto import missing items using context actions


## Case-insensitive processing of variable indentifiers in vue template

1. Go to file `packages/vite-spa/src/App.vue`
2. Remove comment at line 23
3. `bar` marked with warning '_Instance member is not accessible_' 
