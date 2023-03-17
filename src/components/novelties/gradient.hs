-- Used to find the correct CSS color gradient values for CardsEffect
-- Given the colors `purple` and `blue`, first make them lighter
-- by mixing with white, then find the intermediate values to distribute to the cards.

purple :: [Float]
purple = [157, 76, 255]

blue :: [Float]
blue = [86, 212, 210]

faint :: Float -> Float
faint x = x + (255 - x)* 0.7

-- Finds n intermediate values, evenly spaced
intermediateValues :: [Float] -> [Float] -> Integer -> [[Float]]
intermediateValues _ _ 0 = []
intermediateValues xs ys n = xs' : intermediateValues xs' ys (n-1)
    where
        step = map (/ fromIntegral (n+1)) (zipWith (-) ys xs)
        xs' = zipWith (+) xs step

printNestedList :: Show a => [[a]] -> IO ()
printNestedList [] = return ()
printNestedList (x:xs) = do
    print x
    printNestedList xs

main :: IO ()
main = do
    let faintBlue = map faint blue
    let faintPurple = map faint purple
    let result = intermediateValues faintBlue faintPurple 3
    print faintBlue
    printNestedList result
    print faintPurple


