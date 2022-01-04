#!/usr/bin/env node

import commonLogic from '../src/index.js';
import { rules, getQuestionAndAnswer } from '../src/games/prime-game.js';

commonLogic(rules, getQuestionAndAnswer);
