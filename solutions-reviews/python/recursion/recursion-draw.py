from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# upside down triangle
# to point x,y
# in size size
# equilateral triangle height: a*sqrt(3)/2
def draw_triangle(x, y, size):
    height_ratio = 3**.5/2
    canvas.create_polygon(
        x, y,
        x+size, y,
        x+size/2, y+height_ratio*size
    )

def draw_stuff(x, y, size):
    canvas.create_rectangle(x, y, x+size, y+size, fill='lime green')
    canvas.create_oval(x, y, x+size, y+size, fill='purple')
    draw_triangle(x, y, size)

def draw_recursive(x, y, size):
    if size < 10:
        return
    else:
        draw_stuff(x, y, size)
        draw_recursive(x, y, size/3)
        draw_recursive(x+size/2, y, size/2)
        draw_recursive(x+size/3, y+size*2/3, size/3)

draw_recursive(10, 10, 280)

root.mainloop()
