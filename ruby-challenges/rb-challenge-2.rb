# Create a function that when given a number, it will produce the factoral of that number

def createFactoral(number)
    i = 1
    total = 1
    while i <= number do
        total = total * i
        i += 1
    end
    return total
end

print createFactoral(6)
