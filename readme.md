
![Logo](https://github.com/WKLD-Labs/.github/blob/main/profile/draft-rpl-04.jpg?raw=true)


# ASE Lab Web Backend

ASE Lab backend for web programming course tasks by Group 5

## API Reference

#### Add member

```http
  POST /api/member
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `nim` | `string` | **Required**. Student Number |
| `name` | `string` | Student Name |
| `major` | `integer` | Based on defined Major |

#### Get all member

```http
  GET /api/member
```

#### Add major
```http
  POST /api/major
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Major name |
| `description` | `string` | Major description |


## Authors

- [@Adam Rafif Faqih](https://github.com/AdamRFaqih)
- [@Habli Zulvana Ath-Thaariq](https://github.com/AdamRFaqih)
- [@Maximus Bayu](https://github.com/AdamRFaqih)
- [@Muhamad Ilham Nasrullah](https://github.com/AdamRFaqih)
- [@Muhammad Isa Al Anshori](https://github.com/AdamRFaqih)
- [@Nabiel Prayoga Budiana](https://github.com/AdamRFaqih)
