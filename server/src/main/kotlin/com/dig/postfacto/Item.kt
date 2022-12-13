package com.dig.postfacto

import javax.persistence.*

@Entity
@Table(name = "item")
data class Item (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int,

    val name: String
)
