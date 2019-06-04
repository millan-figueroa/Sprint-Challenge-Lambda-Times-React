## Self-Study/Essay Questions

- [x] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

Prototypes are used to determine the correct type of props and their requirements which would be assigned to a component.

- [x] Describe a life-cycle event in React? 
The life-cycle starts with the "birth" aka mounting phase during which the component is created with its original data. The next phase would be growth/ updating during which data can be changed with setState. Finally the "death" happens which is the unmounting phase - in this phase components are removed from screen and clean up happens. This whole process all occurs behind the scenes. 

- [x] Explain the details of a Higher Order Component?

A higher order component is a technique for re-using components. It is basically a function that returns a new component.

- [x] What are three different ways to style components in React? Explain some of the benefits of each.

You can style React components using basic inline CSS although this is the most limited method. You can use styling libraries like Bootstrap/Reactstrap which are preferred because they add so many extra capabilities alongside the CSS capabilities also there are many libraries out there to choose from. You can use CSS modules which are locally scoped unlike traditional stylesheets which are external (which you can also use to style React components), the benefit of this method is that it allows you to use traditional CSS methods.