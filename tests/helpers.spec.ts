import { isBuzz, isFizz } from "../src/helpers";

describe("helpers", () => {
    describe("isFizz", () => {
        it("returns true for number divided by 3", () => {

          expect(isFizz(3)).toBe(true);
          expect(isFizz(6)).toBe(true);
          expect(isFizz(9)).toBe(true);
        });

        it("returns false for number not divided by 3", () => {

            expect(isFizz(1)).toBe(false);
            expect(isFizz(2)).toBe(false);
            expect(isFizz(4)).toBe(false);
          });

          it("returns true for number containing 3", () => {

            expect(isFizz(13)).toBe(true);
            expect(isFizz(31)).toBe(true);
          });
      });

      describe("isBuzz", () => {
        it("returns true for number divided by 5", () => {

          expect(isBuzz(5)).toBe(true);
          expect(isBuzz(10)).toBe(true);
          expect(isBuzz(15)).toBe(true);
        });

        it("returns false for number not divided by 5", () => {

            expect(isBuzz(1)).toBe(false);
            expect(isBuzz(2)).toBe(false);
            expect(isBuzz(4)).toBe(false);
          });

          it("returns true for number containing 5", () => {

            expect(isBuzz(51)).toBe(true);
            expect(isBuzz(15)).toBe(true);
            expect(isBuzz(53)).toBe(true);
          });
      });
});
