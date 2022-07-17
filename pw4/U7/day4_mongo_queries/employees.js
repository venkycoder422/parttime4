employees > db.employee_salary.find({ gender: "Male", department: "Engineering" }).count()

employees > db.employee_salary.find({ gender: "Female", salary: { $lt: 80000 } }).count()

employees > db.employee_salary.find({ gender: "Female", department: "Engineering", salary: { $lt: 1000000 } }).count()

employees > db.employee_salary.find({ department: "Accounting", salary: { $lt: 100000 } })

employees > db.employee_salary.find({ salary: { $gt: 2900000 }, gender: "Male" })

employees > db.employee_salary.find({ salary: { $gt: 2900000 }, gender: "Female" })

employees > db.employee_salary.find({ department: "Enginnering", salary: { $gt: "2000000" } })

employees > db.employee_salary.find({ salary: { $in: [100000, 200000] }, gender: "Female" })

employees > db.employee_salary.find({ salary: { $in: [500000, 1000000] }, gender: "Male" })

employees > db.employee_salary.find({ salary: 500000, gender: "Female", department: "Enginnering" })

employees > db.employee_salary.find({ salary: 500000, gender: "Male", department: "Human Resources" })