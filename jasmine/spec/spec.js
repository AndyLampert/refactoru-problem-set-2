describe("firstReverse", function() {
	it("takes a single string parameter and returns the string in reverse order", function() {
		expect(firstReverse("USA")).toEqual("ASU");
		expect(firstReverse("bigger string")).toEqual("gnirts reggib");
	});
});

describe("swapCase", function() {
	it("takes a single string parameter and swaps the case of each character. For example: if a string is \"Hello World\" the output should be \"hELLO wORLD\".", function() {
		expect(swapCase("Hello World")).toEqual("hELLO wORLD");
	});
});

describe("letterCount", function() {
	it("that takes a single string parameter and returns the first word with the greatest number of repeated letters", function() {
		expect(letterCount("Today, is the greatest day ever!")).toEqual("greatest");
		expect(letterCount("Do you know any bookkeepers?")).toEqual("bookkeepers");
	});
});