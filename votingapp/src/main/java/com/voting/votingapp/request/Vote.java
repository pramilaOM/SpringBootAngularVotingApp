package com.voting.votingapp.request;

import lombok.Data;
import lombok.NoArgsConstructor;

//dto
@Data
@NoArgsConstructor
public class Vote {
    private Long pollId;
    private int optionIndex;
}
