Create Database full_stack;
\c full_stack;

Create Table posts(
    id Serial Primary Key,
    title Text Not Null,
    content Text not Null,
    createdAt Date
)