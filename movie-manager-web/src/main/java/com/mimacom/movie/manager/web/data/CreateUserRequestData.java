package com.mimacom.movie.manager.web.data;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.mimacom.movie.manager.service.domain.Gender;
import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.Id;
import javax.validation.constraints.Pattern;
import java.time.LocalDate;

public class CreateUserRequestData {

    @NotBlank
    @Pattern(regexp = "[a-z-A-Z]*")
    private String firstName;

    @NotBlank
    @Pattern(regexp = "[a-z-A-Z]*")
    private String lastName;

    @Id
    @NotBlank
    @Email
    private String email;

    @JsonDeserialize(using = LocalDateDeserializer.class)
    private LocalDate birthDate;

    private Gender gender;

    public String getFirstName() {
        return this.firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getBirthDate() {
        return this.birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public Gender getGender() {
        return this.gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }
}
