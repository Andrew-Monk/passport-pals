### Data Models

Database Type: MongoDB

EventIn
| Name | Type | Unique | Optional |
| ------------- |:-------------:| -----:| -----:|
| Event Title | str | No | No |
| Location | str | No | No |
| Expected Guests | lst | No | Yes |
| Picture | str | No | No |
| Category | str | No | No |
| Cost | int | No | No |
| Language | str | No | No |
| Payment Type | str | No | No |

EventOut
| Name | Type | Unique | Optional |
| ------------- |:-------------:| -----:| -----:|
| ID | str | No | No |

EventList
| Name | Type | Unique | Optional |
| ------------- |:-------------:| -----:| -----:|
| Events | lst(EventOut) | No | No |

AccountIn
| Name | Type | Unique | Optional |
| ------------- |:-------------:| -----:| -----:|
| Email | str | No | No |
| Language | str | No | No |
| Country | str | No | No |
| Password | str | No | No |
| Full Name | str | No | No |
| Attending | lst | No | Yes |
| Hosting | lst | No | Yes |

AccountOut
| Name | Type | Unique | Optional |
| ------------- |:-------------:| -----:| -----:|
| ID | str | No | No |
