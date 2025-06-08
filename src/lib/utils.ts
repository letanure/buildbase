export function mergeClassNames(
	...classes: (string | undefined | false | null)[]
) {
	return classes.filter(Boolean).join(" ");
}
